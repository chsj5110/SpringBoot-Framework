# SpringBoot_Framework
Spring Boot3 &amp; Spring Framework 6 with Java

Udemy 강의 공부 코드 백업

1. 구조적 프로그래밍
반복되는 코드를 재사용에 용이하도록 함수로 만들어서 사용한다
ex)
		List<Integer> numbers = List.of(12, 9, 13, 4, 6, 2, 4, 12, 15);
		printAllNumbersInListStructured(numbers);
		System.out.println("printAllNumbersInList STRUCTURED");
		for (int number : numbers) {
			System.out.println(number);
		}

2. 함수형 프로그래밍 (람다식)
순수 함수를 조합하여 사용한다. 코드가 더 간결해지고 예측가능해진다.
ex)
		List<Integer> numbers = List.of(12, 9, 13, 4, 6, 2, 4, 12, 15);
		numbers.stream()
		.forEach(System.out::println);


4. Map
하나의 값을 다른 값에 매핑하기 위해 사용한다
ex)
		numbers.stream()
		.filter(number -> number%2==0) //람다식
		.map(number -> number*number)
		.forEach(System.out::println);


5. Optional
null값에 의한 오류가 발생할 수 있는 상황에서는 Optional을 사용할것
ex)
		List<String> fruits = List.of("apple", "banana", "mango");
		Predicate<? super String> predicate = fruit -> fruit.startsWith("c");
		Optional<String> optional = fruits.stream().filter(predicate).findFirst();
		System.out.println(optional);
