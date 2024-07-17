package programming;

import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

public class PlayingWithOptional {

	public static void main(String[] args) {
		List<String> fruits = List.of("apple", "banana", "mango");
		
		Predicate<? super String> predicate = fruit -> fruit.startsWith("c");
		Optional<String> optional = fruits.stream().filter(predicate).findFirst();
		System.out.println(optional);
		System.out.println(optional.isEmpty());
		System.out.println(optional.isPresent());
		System.out.println(optional.get());

		//null값이 발생할수 있는 상황에서는 Optional을 사용할것
		Optional<String> fruit = Optional.of("banana");
		Optional<String> empty = Optional.empty();
	}

}
