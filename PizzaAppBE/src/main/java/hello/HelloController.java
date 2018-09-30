package hello;

import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import hello.Customer;
import hello.CustomerRepository;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @Autowired
    private CustomerRepository repo;

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping("/customers")
    public List<Customer> getCustomers() {
        return repo.findAll();
    }

}