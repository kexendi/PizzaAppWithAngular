package hello;

import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import hello.Pizza;
import hello.PizzaRepository;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @Autowired
    private PizzaRepository repo;

    @RequestMapping("/")
    public String index() {
        return "Takarodjá";
    }

    @RequestMapping("/pizza")
    public List<Pizza> getPizzas() {
        return repo.findAll();
    }

}