package com.in28minutes.learn_spring_framework.game;

public class PacmanGame implements GamingConsole {

	public void up() {
		System.out.println("Pacman up");
	}
	
	public void down() {
		System.out.println("Pacman down");
	}
	
	public void left() {
		System.out.println("Pacman back");
	}

	public void right() {
		System.out.println("Pacman Go");
	}
}
