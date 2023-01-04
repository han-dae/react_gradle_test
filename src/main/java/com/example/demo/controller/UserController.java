package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;


import com.example.demo.mapper.UserMapper;
import com.example.demo.vo.UserVO;

@CrossOrigin(origins = "*", maxAge=3600)
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserMapper UserMapper;

    @GetMapping(value = "")
    public List<UserVO> userList(){
        System.out.println(UserMapper.userList());
        System.out.println("유저리스트 출력");
        return UserMapper.userList();
    }

    @PostMapping
    void insertUser(@RequestBody UserVO user){
        UserMapper.insertUser(user);
        System.out.println("유저DB저장 성공");

    }

    @GetMapping("/{id}")
    public UserVO fetchUserByID(@PathVariable int id){
        System.out.println(UserMapper.fetchUserByID(id));
        UserVO fetchUser = UserMapper.fetchUserByID(id);
        return fetchUser;
    }
    @PutMapping("/{id}")
    public void updateUser(@PathVariable int id, @RequestBody UserVO user){
        UserVO updateUser = user;
        System.out.println("업데이트 유저 =>" + updateUser);

        updateUser.setFirstName(user.getFirstName());
        updateUser.setLastName(user.getLastName());
        updateUser.setAge(user.getAge());
        updateUser.setSalary(user.getSalary());
        UserMapper.updateUser(updateUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id){
        UserMapper.deleteUser(id);
        System.out.println("유저삭제");
    }
}
