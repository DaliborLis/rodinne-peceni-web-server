package lis.rp;

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
@Path("/{a:dorty|zakusky|fr_zakusky|chlebicky|kolace|cukrovi|about|pricing|contact}")
public class SOAPageResource {

    private final String soaIndex;

    @Inject
    public SOAPageResource(@ConfigProperty(name = "soa.index") String soaIndex) {
        this.soaIndex = soaIndex;
    }

    @GET
    @Produces(MediaType.TEXT_HTML)
    public Response uiNavigation() throws IOException {
        String content;
        try (var is = new BufferedReader(new InputStreamReader(Objects.requireNonNull(SOAPageResource.class.getClassLoader().getResourceAsStream(soaIndex)), StandardCharsets.UTF_8))) {
            content = is.lines().collect(Collectors.joining());
        }
        return Response.ok(content).build();
    }

}
