package ca.munvar.EmpActivity.service;

import ca.munvar.EmpActivity.dto.ActivityDto;
import ca.munvar.EmpActivity.entity.Activity;
import ca.munvar.EmpActivity.exception.ResourceNotFoundException;
import ca.munvar.EmpActivity.mapper.ActivityMapper;
import ca.munvar.EmpActivity.repository.ActivityRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ActivityServiceImpl implements ActivityService
{
    private ActivityRepository activityRepository;
    @Override
    public ActivityDto addActivity(ActivityDto activityDto) {

        //convert ActivityDto to Activity Jpa entity

        Activity activity= ActivityMapper.maptoActivity(activityDto);
//        activity.setId(activityDto.getId());
//        activity.setTitle(activityDto.getTitle());
//        activity.setDescription(activityDto.getDescription());
//        activity.setCompleted(activityDto.isCompleted());

        // save Activity JPA entity to DB
        Activity savedActivity=activityRepository.save(activity);

        // convert savedActivity to ActivityDto obj
        ActivityDto savedActivityDto= ActivityMapper.mapToActivityDto(savedActivity);
//        savedActivityDto.setId(savedActivity.getId());
//        savedActivityDto.setTitle(savedActivity.getTitle());
//        savedActivityDto.setDescription(savedActivity.getDescription());
//        savedActivityDto.setCompleted(savedActivity.isCompleted());

        return savedActivityDto;
    }

    @Override
    public ActivityDto getActivity(Long id) {

        Activity activity=activityRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No Activity with the given Id exists :"+ id));
        return ActivityMapper.mapToActivityDto(activity);
    }

    @Override
    public List<ActivityDto> getAllActivities() {
        List<Activity> list= activityRepository.findAll();
        return list.stream()
                .map(activity -> ActivityMapper.mapToActivityDto(activity))
                .toList();
    }

    @Override
    public ActivityDto updateActivity(Long id, ActivityDto activityDto) {
        Activity activity= activityRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("No Activity with the given Id exists :"+ id));

        activity.setTitle(activityDto.getTitle());
        activity.setDescription(activityDto.getDescription());
        activity.setCompleted(activityDto.isCompleted());

        Activity updatedActivity=activityRepository.save(activity);

        return new ActivityDto( activity.getTitle(), activity.getDescription(),activity.isCompleted());
    }

    @Override
    public void deleteActivity(Long id) {
        Activity activity= activityRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("No Activity with the given Id exists :"+ id));

        activityRepository.deleteById(id);

        System.out.println("Activity Successfully deleted");
    }

    @Override
    public ActivityDto completeActivity(Long id) {

        Activity activity= activityRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No Activity with the given Id exists :"+ id));

        activity.setCompleted(Boolean.TRUE);
        Activity savedActivity= activityRepository.save(activity);
        return ActivityMapper.mapToActivityDto(savedActivity);
    }

    @Override
    public ActivityDto inCompleteActivity(Long id) {

        Activity activity= activityRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException(("No Activity with the given Id exists :"+ id)));

        activity.setCompleted(Boolean.FALSE);
        Activity savedActivity= activityRepository.save(activity);

        return ActivityMapper.mapToActivityDto(savedActivity);
    }

    public void Test(){}
}
