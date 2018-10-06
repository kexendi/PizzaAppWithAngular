// tag::sample[]
package hello;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pizza {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String topping;
    private String price;

    public Pizza() {}
    
    public Pizza(String topping, String price) {
        this.topping = topping;
        this.price = price;
    }

    @Override
    public String toString() {
        return String.format(
                "Pizza[id=%d, topping='%s', price='%s']",
                id, topping, price);
    }

	public Long getId() {
		return id;
	}

	public String getTopping() {
		return topping;
	}

	public String getPrice() {
		return price;
	}
}

