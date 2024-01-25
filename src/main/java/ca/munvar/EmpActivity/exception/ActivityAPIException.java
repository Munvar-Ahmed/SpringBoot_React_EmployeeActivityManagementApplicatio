package ca.munvar.EmpActivity.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
@Getter
@AllArgsConstructor
public class ActivityAPIException extends RuntimeException{
    private HttpStatus status;
    private String message;
}
