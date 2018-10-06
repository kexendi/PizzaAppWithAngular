package hello;

import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import hello.Pizza;
import hello.PizzaRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class HelloController {

    @Autowired
    private PizzaRepository repo;

    @RequestMapping("/")
    public String index() {
        return "Takarodjá";
    }

    @GetMapping("/pizza")
    public List<Pizza> getPizzas() {
        return repo.findAll();
    }

    @PostMapping("/pizza")
    public void savePizza(@RequestBody Pizza pizza) {
        //repo.save(new Pizza(pizza.getTopping(), pizza.getPrice()));
        System.out.println(pizza.toString());
        repo.save(pizza);
    }

}