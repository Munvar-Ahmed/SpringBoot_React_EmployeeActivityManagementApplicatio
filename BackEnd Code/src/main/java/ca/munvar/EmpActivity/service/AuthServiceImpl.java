package ca.munvar.EmpActivity.service;

import ca.munvar.EmpActivity.dto.LoginDto;
import ca.munvar.EmpActivity.dto.RegisterDto;
import ca.munvar.EmpActivity.entity.Role;
import ca.munvar.EmpActivity.entity.User;
import ca.munvar.EmpActivity.exception.ActivityAPIException;
import ca.munvar.EmpActivity.repository.RoleRepository;
import ca.munvar.EmpActivity.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService{

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    @Override
    public String register(RegisterDto registerDto) {

        if(userRepository.existsByUserName(registerDto.getUserName())){
            throw new ActivityAPIException(HttpStatus.BAD_REQUEST, "User already Exists");
        }

        if(userRepository.existsByEmail(registerDto.getEmail())){
            throw new ActivityAPIException(HttpStatus.BAD_REQUEST, "Email already Exists");
}
        User user= new User();
        user.setEmail(registerDto.getEmail());
        user.setUserName(registerDto.getUserName());
        user.setName(registerDto.getName());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role userRole=roleRepository.findByName("ROLE_USER");
        roles.add(userRole);

        user.setRoles(roles);

        userRepository.save(user);

        return "User Registered Successfully";
    }

    @Override
    public String login(LoginDto loginDto) {
        Authentication authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUserNameOrEmail(),
                loginDto.getPassword()

        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return "User-Successfully loggedIn..";
    }


}
