package lis.rp;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import lis.rp.service.VisitorCounterService;

@Path("/navstevnost")
public class VisitorCounterResource {

    private final VisitorCounterService counterService;

    @Inject
    public VisitorCounterResource(VisitorCounterService counterService) {
        this.counterService = counterService;
    }


    @GET
    public Response getTotalCount() {
        return Response.ok()
                .entity(counterService.getCount())
                .build();
    }

    @GET
    @Path("/increment")
    public Response increment() {
        counterService.increment();
        return Response.ok()
                .entity("Counted")
                .build();
    }

}
