package com.AdoptEasy.Adoption;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import com.AdoptEasy.Adoption.Adoption;
import com.AdoptEasy.User.User;
import com.AdoptEasy.Pet.Pet;

import java.util.List;
import java.util.Optional;

public interface AdoptionRepository extends JpaRepository <Adoption, Long>{
    Adoption findById(long id);
    Optional<User> findByUserId(Long userId);
    Optional<Pet> findByPetId(Long petId);
    Optional<Adoption> findByIdAndPetId(Long id, Long petId);
}
