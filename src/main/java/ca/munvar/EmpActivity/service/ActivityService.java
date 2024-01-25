package ca.munvar.EmpActivity.service;

import ca.munvar.EmpActivity.dto.ActivityDto;

import java.util.List;

public interface ActivityService {

    ActivityDto addActivity(ActivityDto activityDto);

    ActivityDto getActivity (Long id);

    List<ActivityDto> getAllActivities();

    ActivityDto updateActivity(Long id, ActivityDto activityDto);

    void deleteActivity(Long id);

    ActivityDto completeActivity(Long id);

    ActivityDto inCompleteActivity(Long id);

}
