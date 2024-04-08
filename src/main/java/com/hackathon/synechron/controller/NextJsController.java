import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.HandlerMapping;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
public class NextJsResourceController {

    @GetMapping("/nextjs/**")
    public ResponseEntity<Resource> serveNextJsResources(HttpServletRequest request) throws IOException {
        String path = (String) request.getAttribute(HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE);
        Path nextJsBuildPath = Paths.get("/Users/ciara/Documents/PersonalCoding/Hackathon-Repository/frontend/.next", path.replace("/nextjs/", ""));
        Resource resource = new FileSystemResource(nextJsBuildPath);
        return ResponseEntity.ok().body(resource);
    }
}