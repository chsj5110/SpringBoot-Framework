package programming;

import java.util.List;

public class FP01Exercise {

	public static void main(String[] args) {
		
		List<Integer> numbers = List.of(12, 9, 13, 4, 6, 2, 4, 12, 15);
		List<String> courses = List.of("Spring", "Spring Boot", "API", "Microservices",
				"AWS", "PCP", "Azure", "Docker", "Kubernates");

		//1. Print Only Odd Numbers from the List
//		PrintOddNumbers(numbers);
		
		//2. Print All Courses individually
//		PrintAllCourses(courses);
		
		//3. Print Courses Containing the word "Spring"
//		PrintCoursesWithSpring(courses);
		
		//4. Print Courses Whose Name has atleast 4 letters
//		PrintCoursesAtleast4Letter(courses);
		
		//5. Print the cubes of odd numbers (홀수의 세제곱)
//		PrintCubesOfOddNumbers(numbers);
		
		//6. Print the number of characters in each course name
		PrintNumberOfCharactersInEachCourseName(courses);
	}
	
	private static void PrintOddNumbers(List<Integer> numbers) {
		numbers.stream()
		.filter(number -> number%2 !=0)
		.forEach(System.out::println);
	}
	
	private static void PrintAllCourses(List<String> courses) {
		courses.stream()
		.forEach(System.out::println);
	}
	
	private static void PrintCoursesWithSpring(List<String> courses) {
		courses.stream()
		.filter(course -> course.contains("Spring"))
		.forEach(System.out::println);
	}
	
	private static void PrintCoursesAtleast4Letter(List<String> courses) {
		courses.stream()
		.filter(course -> course.length()>=4)
		.forEach(System.out::println);
	}
	
	private static void PrintCubesOfOddNumbers(List<Integer> numbers) {
		numbers.stream()
		.filter(number -> number%2 !=0)
		.map(number -> number * number * number)
		.forEach(System.out::println);
	}
	
	private static void PrintNumberOfCharactersInEachCourseName(List<String> courses) {
		courses.stream()
		.map(course -> course + " " + course.length())
		.forEach(System.out::println);
	}
	
	
}
