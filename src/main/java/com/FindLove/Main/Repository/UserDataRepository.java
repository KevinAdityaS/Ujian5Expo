package com.FindLove.Main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.FindLove.Main.Entity.UserData;

public interface UserDataRepository extends JpaRepository<UserData, Long>{

	UserData findByUsername(String username);
	
	@Query(value = "SELECT * FROM user WHERE username=?1 AND phone=?2", nativeQuery = true)
	UserData findByLogin(String username, String phone);
	
}
