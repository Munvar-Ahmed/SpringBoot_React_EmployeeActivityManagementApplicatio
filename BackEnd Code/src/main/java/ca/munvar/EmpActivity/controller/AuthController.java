package ca.munvar.EmpActivity.controller;

import ca.munvar.EmpActivity.dto.LoginDto;
import ca.munvar.EmpActivity.dto.RegisterDto;
import ca.munvar.EmpActivity.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {

    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto){

        String response= authService.register(registerDto);

        return new ResponseEntity<>(response, HttpStatus.OK);

    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto){
        String response= authService.login(loginDto);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
