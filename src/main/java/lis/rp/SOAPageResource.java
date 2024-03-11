package lis.rp;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

import java.net.URI;

/**
 * The purpose of the class is to handle UI navigation requests sent to server.
 * By default, the navigation is handled by React router navigation framework.
 */
@Path("")
public class SOAPageResource {

    @GET
    @Path("/{a:dorty|zakusky|fr_zakusky|chlebicky|kolace|cukrovi}")
    public Response redirect() {
        return Response.seeOther(URI.create("/")).build();
    }

}
