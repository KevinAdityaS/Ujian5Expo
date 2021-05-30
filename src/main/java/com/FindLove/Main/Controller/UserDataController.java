package com.FindLove.Main.Controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.FindLove.Main.Entity.UserData;
import com.FindLove.Main.Repository.UserDataRepository;
import com.FindLove.Main.Utility.FileUtility;
import com.google.gson.Gson;

@RestController
@RequestMapping("/user")
public class UserDataController {

	@Autowired
	UserDataRepository userDataRepository;
	
	@GetMapping("/")
	public List<UserData> getAll() {
		
		return userDataRepository.findAll();
		
	}
	
	@GetMapping("/login/")
	public UserData getByLogin(@RequestParam("username")String username, @RequestParam("phone") String phone) {
		
		return userDataRepository.findByLogin(username, phone);
		
	}
	
	@GetMapping("/username/{value}")
	public UserData getByUsername(@PathVariable("value") String value) {
		
		return userDataRepository.findByUsername(value);
		
	}
	
	@GetMapping(value = "/image/{username}", produces = MediaType.IMAGE_JPEG_VALUE)
	public @ResponseBody byte[] getImageWithMediaType(@PathVariable String username) throws IOException{
		
		final InputStream in = getClass().getResourceAsStream("/user-photo/" + username);
		return IOUtils.toByteArray(in);
		
	}
	
	@PostMapping("/register/")
	public String postRegisterUser(@RequestParam(value = "file")MultipartFile image, @ModelAttribute(value = "data") String dataJson) throws IOException {
		
		String fileName = StringUtils.cleanPath(image.getOriginalFilename());
		String uploadDir = "src/main/java/user-photo";
		FileUtility.saveFile(uploadDir, fileName, image);
		UserData userData = new Gson().fromJson(dataJson, UserData.class);
		userData.setImage(fileName);
		
		userDataRepository.save(userData);
		return " Register Successfully!";
		
	}
	
}
