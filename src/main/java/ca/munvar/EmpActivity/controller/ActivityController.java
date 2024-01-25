package ca.munvar.EmpActivity.controller;

import ca.munvar.EmpActivity.dto.ActivityDto;
import ca.munvar.EmpActivity.service.ActivityService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/activities")

public class ActivityController {
    private ActivityService activityService;
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<ActivityDto> addActivity(@RequestBody ActivityDto activityDto){

        ActivityDto savedActivityDto= activityService.addActivity(activityDto);

        return new ResponseEntity<>(savedActivityDto, HttpStatus.CREATED);
    }
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("{id}")
    public ResponseEntity<ActivityDto> getActivity(@PathVariable Long id){
        ActivityDto activityDto=activityService.getActivity(id);
        return new ResponseEntity<>(activityDto, HttpStatus.OK);
    }
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping
    public ResponseEntity<List<ActivityDto>> getAllActivities(){
        List<ActivityDto> list = activityService.getAllActivities();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<ActivityDto> updateActivity(@PathVariable Long id, @RequestBody ActivityDto activityDto){
        ActivityDto updateActivityDto= activityService.updateActivity(id, activityDto);
        return ResponseEntity.ok(updateActivityDto);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String>  deleteActivity(@PathVariable Long id){
        activityService.deleteActivity(id);
        return ResponseEntity.ok("Activity Successfully deleted");
    }
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PatchMapping("{id}/complete")
    public ResponseEntity<ActivityDto> completeActivity(@PathVariable Long id){
        ActivityDto activityDto= activityService.completeActivity(id);
        return ResponseEntity.ok(activityDto);
    }
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PatchMapping("{id}/in-complete")
    public ResponseEntity<ActivityDto> inCompleteActivity(@PathVariable Long id){
        ActivityDto activityDto = activityService.inCompleteActivity(id);
        return new ResponseEntity<>(activityDto, HttpStatus.OK);
    }
}
