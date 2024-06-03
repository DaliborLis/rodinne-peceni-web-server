package lis.rp.service;

import jakarta.enterprise.context.ApplicationScoped;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.concurrent.atomic.AtomicLong;

@ApplicationScoped
public class VisitorCounterService {

    public static final String COUNTER_FILE = "counter.txt";
    public static final String TEMP_COUNTER_FILE = "temp_counter.txt";

    private AtomicLong counter;

    public VisitorCounterService() {
        initCounter();
    }

    public long getCount() {
        return counter.get();
    }

    public synchronized void increment() {
        counter.incrementAndGet();
        try {
            Path tempFile = Paths.get(TEMP_COUNTER_FILE);
            Files.write(tempFile, String.valueOf(counter).getBytes());
            Files.move(tempFile, Paths.get(COUNTER_FILE),
                    StandardCopyOption.REPLACE_EXISTING, StandardCopyOption.ATOMIC_MOVE);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private void initCounter() {
        Path counterFile = Paths.get(COUNTER_FILE);
        try {
            if (Files.exists(counterFile)) {
                String counterStr = new String(Files.readAllBytes(counterFile));
                counter = new AtomicLong(Long.parseLong(counterStr));
            } else {
                Files.write(counterFile, "0".getBytes());
                counter = new AtomicLong();
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
