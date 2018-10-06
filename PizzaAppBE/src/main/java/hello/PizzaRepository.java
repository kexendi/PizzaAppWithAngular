package hello;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PizzaRepository extends CrudRepository<Pizza, Long> {

    List<Pizza> findByTopping(String topping);
    List<Pizza> findByPrice(String price);
    List<Pizza> findAll();
}