package lis.rp;

import io.helidon.microprofile.server.RoutingName;
import io.helidon.microprofile.server.RoutingPath;
import io.helidon.webserver.Routing;
import io.helidon.webserver.Service;
import io.helidon.webserver.staticcontent.StaticContentSupport;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * The purpose of the class is to handle UI navigation requests sent to server.
 * By default, the navigation is handled by React router navigation framework.
 */
@ApplicationScoped
@RoutingName(value = "@default", required = true)
@RoutingPath("") // In Helidon 4 routing path should be /
public class SOAPageResource implements Service {

//    private final String soaIndex;
//
//    @Inject
//    public SOAPageResource(@ConfigProperty(name = "soa.index") String soaIndex) {
//        this.soaIndex = soaIndex;
//    }
//
//    @GET
//    @Produces(MediaType.TEXT_HTML)
//    public Response uiNavigation() throws IOException {
//        System.out.println("Here");
//        String content;
//        try (var is = new BufferedReader(new InputStreamReader(Objects.requireNonNull(SOAPageResource.class.getClassLoader().getResourceAsStream(soaIndex)), StandardCharsets.UTF_8))) {
//            content = is.lines().collect(Collectors.joining());
//        }
//        return Response.ok(content).build();
//    }

      // Helidon 4 version
//    @Override
//    public void routing(HttpRules httpRules) {
//        httpRules.get("", (req, res) -> {
//            String content;
//            try (var is = new BufferedReader(new InputStreamReader(Objects.requireNonNull(SOAPageResource.class.getClassLoader().getResourceAsStream("web/index.html")), StandardCharsets.UTF_8))) {
//                content = is.lines().collect(Collectors.joining());
//            }
//            res.header("Content-Type", "text/html");
//            res.send(content);
//        });
//        httpRules.register("", StaticContentService.builder("web").build());
//    }

    @Override
    public void update(Routing.Rules httpRules) {
        httpRules.get("/", (req, res) -> {
            String content;
            try (var is = new BufferedReader(new InputStreamReader(Objects.requireNonNull(SOAPageResource.class.getClassLoader().getResourceAsStream("web/index.html")), StandardCharsets.UTF_8))) {
                content = is.lines().collect(Collectors.joining());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            res.addHeader("Content-Type", "text/html");
            res.send(content);
        });

        httpRules.register("", StaticContentSupport.builder("web").build());
    }
}
