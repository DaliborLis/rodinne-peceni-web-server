package lis.rp;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Source;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@ApplicationScoped
public class SSRService {

    private static final String JS = "js";
    private static final String JS_FILES_PREFIX = "web/static/js";

    private final Context cx = Context.newBuilder(JS).build();

    @PostConstruct
    private void initializeContext() {
        System.out.println("initializeContext");
        cx.eval(JS, "window = { location: { hostname: 'localhost' }}");
        cx.eval(JS, "window.isServer = true");

        /* URL class required by react-router, this implementation provides empty URL class.
         * The Static router works fine with this implementation /*
         */
        cx.eval(JS, """
                class URL {
                  constructor() {  }
                }
                """);

        try {
            /* Load the TextEncoder implementation (polyfill). Required by React.
             * https://unpkg.com/text-encoding@0.7.0/
             */
            cx.eval(Source.newBuilder(JS, Objects.requireNonNull(this.getClass().getClassLoader().getResource("encoding-indexes.js"))).build());
            cx.eval(Source.newBuilder(JS, Objects.requireNonNull(this.getClass().getClassLoader().getResource("encoding.js"))).build());

            List<String> jsFiles = listJsResources();
            for (String jsFile : jsFiles) {
                System.out.println(jsFile);
                cx.eval(Source.newBuilder(JS, Objects.requireNonNull(this.getClass().getClassLoader().getResource("%s/%s".formatted(JS_FILES_PREFIX, jsFile)))).build());
            }

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private List<String> listJsResources() throws IOException {
        try (var reader = new BufferedReader(new InputStreamReader(Objects.requireNonNull(this.getClass().getClassLoader().getResourceAsStream(JS_FILES_PREFIX)), StandardCharsets.UTF_8))) {
            return reader.lines()
                    .peek(System.out::println)
                    .filter(f -> f.endsWith(".js"))
                    .collect(Collectors.toList());
        }
    }

}
