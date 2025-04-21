package store.manegement.entity;


import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
//    @ManyToOne
//    @JoinColumn(name = "created_by")
//    private User createdBy;
//    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
//    private List<Product> products;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

//	public User getCreatedBy() {
//		return createdBy;
//	}
//
//	public void setCreatedBy(User createdBy) {
//		this.createdBy = createdBy;
//	}
//
//	public List<Product> getProducts() {
//		return products;
//	}
//
//	public void setProducts(List<Product> products) {
//		this.products = products;
//	}

    
}
