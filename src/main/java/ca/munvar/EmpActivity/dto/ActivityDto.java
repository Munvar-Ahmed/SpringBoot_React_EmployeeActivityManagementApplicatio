package ca.munvar.EmpActivity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ActivityDto {

    private Long id;
    private String title;

    private String description;
    private boolean completed;

    public ActivityDto(String title, String description, boolean completed) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}
