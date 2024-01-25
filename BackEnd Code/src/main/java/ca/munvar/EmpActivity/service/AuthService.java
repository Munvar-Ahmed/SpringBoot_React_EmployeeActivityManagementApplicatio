package ca.munvar.EmpActivity.service;

import ca.munvar.EmpActivity.dto.LoginDto;
import ca.munvar.EmpActivity.dto.RegisterDto;

public interface AuthService {

    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
