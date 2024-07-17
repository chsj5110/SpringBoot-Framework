package programming;

import java.util.List;

public class FP01Structured {

	public static void main(String[] args) {

		List<Integer> numbers = List.of(12, 9, 13, 4, 6, 2, 4, 12, 15);

//		printAllNumbersInListStructured(numbers);
//		printAllNumbersInListFunctional(numbers);
//		printEvenNumbersInListStructured(numbers);
//		printEvenNumbersInListFunctional(numbers);
		printSquaresOfEvenNumbersInListFunctional(numbers);
	}

	// 구조적 접근법
	private static void printAllNumbersInListStructured(List<Integer> numbers) {

		System.out.println("printAllNumbersInList STRUCTURED");
		for (int number : numbers) {
			System.out.println(number);
		}

	}

	// 함수형 -> 수행할 작업에 대해 포커스를 맞춘다.
	private static void print(int number) {
		System.out.println(number);
	}

	private static void printAllNumbersInListFunctional(List<Integer> numbers) {

		System.out.println("printAllNumbersInList FUNCTIONAL");
//		numbers.stream()
//				//클래스명::스태틱메서드 -> 메소드 참조 구문 Method Reference
//		.forEach(FP01Structured::print);

		numbers.stream()
				// System.out이라는 클래스의 println 이라는 메소드 / ...Functional이라는 메소드에 numbers가 들어있어서 알아서
				// 프린트해줌
				.forEach(System.out::println); // print라는 메소드는 필요가 없으므로 더 간단하다

	}

	//짝수만 출력 구조적
	private static void printEvenNumbersInListStructured(List<Integer> numbers) {

		System.out.println("print EVEN NumbersInListStructured");
		for (int number : numbers) {
			if (number % 2 == 0)
				System.out.println(number);
		}

	}

	//짝수만 출력 함수형
	private static boolean isEven(int number) {
		return number % 2 == 0;
	}

	private static void printEvenNumbersInListFunctional(List<Integer> numbers) {

		System.out.println("print EVEN NumbersInList FUNCTIONAL");
//		numbers.stream()
//		.filter(FP01Structured::isEven)
//		.forEach(System.out::println);
		
		
		numbers.stream()
		.filter(number -> number%2==0) //람다식
		.forEach(System.out::println);

	}
	
	//제곱식
	// ->하나의 값을 다른 값에 매핑하기 위해서는 map을 사용한다
	private static void printSquaresOfEvenNumbersInListFunctional(List<Integer> numbers) {

		numbers.stream()
		.filter(number -> number%2==0) //람다식
		.map(number -> number*number)
		.forEach(System.out::println);

	}
	
	

}
