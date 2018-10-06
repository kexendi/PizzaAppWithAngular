package hello;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

	private static final Logger log = LoggerFactory.getLogger(Application.class);

	public static void main(String[] args) {
		SpringApplication.run(Application.class);
	}

	@Bean
	public CommandLineRunner demo(PizzaRepository repository) {
		return (args) -> {
			// save a couple of customers
			repository.save(new Pizza("Gombás", "1500"));
			repository.save(new Pizza("Kukoricás", "1300"));
			repository.save(new Pizza("Bacon-ös", "1000"));
			repository.save(new Pizza("Hawaii", "1950"));
			repository.save(new Pizza("Nem tudom", "990"));

			// fetch all customers
			log.info("Customers found with findAll():");
			log.info("-------------------------------");
			for (Pizza pizza : repository.findAll()) {
				log.info(pizza.toString());
			}
			log.info("");
		};
	}

}
