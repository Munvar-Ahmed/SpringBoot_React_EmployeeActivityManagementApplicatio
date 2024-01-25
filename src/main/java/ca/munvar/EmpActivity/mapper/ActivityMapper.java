package ca.munvar.EmpActivity.mapper;

import ca.munvar.EmpActivity.dto.ActivityDto;
import ca.munvar.EmpActivity.entity.Activity;

public class ActivityMapper {

    public static Activity maptoActivity(ActivityDto activityDto){
        Activity activity = new Activity();
        activity.setId(activityDto.getId());
        activity.setTitle(activityDto.getTitle());
        activity.setDescription(activityDto.getDescription());
        activity.setCompleted(activityDto.isCompleted());

        return activity;

    }

    public static ActivityDto mapToActivityDto(Activity activity){
        ActivityDto activityDto= new ActivityDto();
        activityDto.setId(activity.getId());
        activityDto.setTitle(activity.getTitle());
        activityDto.setDescription(activity.getDescription());
        activityDto.setCompleted(activity.isCompleted());
        return activityDto;
    }
}
