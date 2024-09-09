# rodinne-peceni-web-server

Sample Helidon MP project that includes multiple REST operations.

## Build and run


With JDK21
```bash
mvn package
java -jar target/rodinne-peceni-web-server.jar
```

## Exercise the application

Basic:
```
curl -X GET http://localhost:8080/simple-greet
Hello World!
```


JSON:
```
curl -X GET http://localhost:8080/greet
{"message":"Hello World!"}

curl -X GET http://localhost:8080/greet/Joe
{"message":"Hello Joe!"}

curl -X PUT -H "Content-Type: application/json" -d '{"greeting" : "Hola"}' http://localhost:8080/greet/greeting

curl -X GET http://localhost:8080/greet/Jose
{"message":"Hola Jose!"}
```



## Try metrics

```
# Prometheus Format
curl -s -X GET http://localhost:8080/metrics
# TYPE base:gc_g1_young_generation_count gauge
. . .

# JSON Format
curl -H 'Accept: application/json' -X GET http://localhost:8080/metrics
{"base":...
. . .
```



## Try health

```
curl -s -X GET http://localhost:8080/health
{"outcome":"UP",...

```


## Building a Native Image

The generation of native binaries requires an installation of GraalVM 22.1.0+.

You can build a native binary using Maven as follows:

```
mvn -Pnative-image install -DskipTests
```

The generation of the executable binary may take a few minutes to complete depending on
your hardware and operating system. When completed, the executable file will be available
under the `target` directory and be named after the artifact ID you have chosen during the
project generation phase.



## Building the Docker Image

```
docker build -t rodinne-peceni-web-server .
```

## Running the Docker Image

```
docker run --rm -p 8080:8080 rodinne-peceni-web-server:latest
```

Exercise the application as described above.
                                

## Run the application in Kubernetes

If you don’t have access to a Kubernetes cluster, you can [install one](https://helidon.io/docs/latest/#/about/kubernetes) on your desktop.

### Verify connectivity to cluster

```
kubectl cluster-info                        # Verify which cluster
kubectl get pods                            # Verify connectivity to cluster
```

### Deploy the application to Kubernetes

```
kubectl create -f app.yaml                  # Deploy application
kubectl get pods                            # Wait for quickstart pod to be RUNNING
kubectl get service  rodinne-peceni-web-server         # Get service info
```

Note the PORTs. You can now exercise the application as you did before but use the second
port number (the NodePort) instead of 8080.

After you’re done, cleanup.

```
kubectl delete -f app.yaml
```
                                

## Building a Custom Runtime Image

Build the custom runtime image using the jlink image profile:

```
mvn package -Pjlink-image
```

This uses the helidon-maven-plugin to perform the custom image generation.
After the build completes it will report some statistics about the build including the reduction in image size.

The target/rodinne-peceni-web-server-jri directory is a self contained custom image of your application. It contains your application,
its runtime dependencies and the JDK modules it depends on. You can start your application using the provide start script:

```
./target/rodinne-peceni-web-server-jri/bin/start
```

Class Data Sharing (CDS) Archive
Also included in the custom image is a Class Data Sharing (CDS) archive that improves your application’s startup
performance and in-memory footprint. You can learn more about Class Data Sharing in the JDK documentation.

The CDS archive increases your image size to get these performance optimizations. It can be of significant size (tens of MB).
The size of the CDS archive is reported at the end of the build output.

If you’d rather have a smaller image size (with a slightly increased startup time) you can skip the creation of the CDS
archive by executing your build like this:

```
mvn package -Pjlink-image -Djlink.image.addClassDataSharingArchive=false
```

For more information on available configuration options see the helidon-maven-plugin documentation.
                                
## Certbot generate certificate

```bash
sudo certbot certonly --manual --preferred-challenges dns -d rodinnepeceni.cz,www.rodinnepeceni.cz
# Press ENTER to see the both challenge values for the both domains
# Update the DNS TXT records for _acme-challenge and _acme-challenge.www by the new values and reload the DNS configuration
# Check whether the DNS records are already in place:
dig TXT _acme-challenge.rodinnepeceni.cz
dig TXT _acme-challenge.www.rodinnepeceni.cz
# When the records contain the new verification challenge values, press enter in the terminal window to finish the DNS verification challenge
# Finally restart the nginx server to load the new certificates
sudo service nginx restart
```

## nginx configuration

File``/etc/nginx/conf.d/default.conf``:

```
server {
        listen 443 ssl;
        server_name rodinnepeceni.cz;

        ssl_certificate /etc/letsencrypt/live/rodinnepeceni.cz-0001/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/rodinnepeceni.cz-0001/privkey.pem;

        location / {
            proxy_pass http://localhost:8080;  # backend URL
            proxy_http_version 1.1;
            proxy_set_header Connection $http_connection;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }

    server {
        listen 80;
        server_name rodinnepeceni.cz;
        return 301 https://$host$request_uri;
    }

    server {
         server_name www.rodinnepeceni.cz;
         return 301 $scheme://rodinnepeceni.cz$request_uri;
    }

```
