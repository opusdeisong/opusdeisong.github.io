---
title: Basic Recursion
categories: [2022-2, BOJ]
tags: [BOJ]
---

# Recursion

 So many of us who started to study about Algorithm first stuff we usually meet is recursion. So I'm trying to share my experience solving recursion questions. In Korea, there is a site called Baekjun, which is a site where you can solve various algorithm problems and ask questions like Code Force. Among the questions that can be solved on this site, I prepared two questions that helped me a lot to get a sense of recursion.

---

### 17478 "재귀함수가 뭔가요?"

# [Silver V] 재귀함수가 뭔가요? - 17478 

[문제 링크](https://www.acmicpc.net/problem/17478) 

### 성능 요약

메모리: 2020 KB, 시간: 8 ms

### 분류

구현(implementation), 재귀(recursion)

### 문제 설명

<p>평소에 질문을 잘 받아주기로 유명한 중앙대학교의 JH 교수님은 학생들로부터 재귀함수가 무엇인지에 대하여 많은 질문을 받아왔다.</p>

<p>매번 질문을 잘 받아주셨던 JH 교수님이지만 그는 중앙대학교가 자신과 맞는가에 대한 고민을 항상 해왔다.</p>

<p>중앙대학교와 자신의 길이 맞지 않다고 생각한 JH 교수님은 결국 중앙대학교를 떠나기로 결정하였다.</p>

<p>떠나기 전까지도 제자들을 생각하셨던 JH 교수님은 재귀함수가 무엇인지 물어보는 학생들을 위한 작은 선물로 자동 응답 챗봇을 준비하기로 했다.</p>

<p>JH 교수님이 만들 챗봇의 응답을 출력하는 프로그램을 만들어보자.</p>

### 입력 

 <p>교수님이 출력을 원하는 재귀 횟수 N(1 ≤ N ≤ 50)이 주어진다.</p>

### 출력 

 <p>출력 예시를 보고 재귀 횟수에 따른 챗봇의 응답을 출력한다.</p>

 The above is the content of the problem. You have to look at the examples to get a sense of the problem, but to put it simply, the process of creating an example that repeats the question was the main requirement to solve this problem. There are two criteria for repetition in this matter. In order to understand the criteria, we need to set the base case well. The first problem could be solved first by placing a line that runs only at the beginning in the main function and a line that runs only at the end in the if statement as a custom function. 
The second problem is to express "____" using recursion. This part, which increases and then decreases, could be solved using two variables that increase in reverse order.

```c++
#include "iostream"
using namespace std;
int num;
void line(int N){
    for(int i = 0; i < num - N; i++)cout<<"____";
}

void func(int N){
    line(N);
    cout<<"\"재귀함수가 뭔가요?\""<<endl;
    if (N == 0){
        line(N);
        cout<<"\"재귀함수는 자기 자신을 호출하는 함수라네\""<<endl;
        line(N);
        cout<<"라고 답변하였지."<<endl;
        return ;
    }
    line(N);
    cout<<"\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어."<<endl;
    line(N);
    cout<<"마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지."<<endl;
    line(N);
    cout<<"그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\""<<endl;
    func(N - 1);
    line(N);
    cout<<"라고 답변하였지."<<endl;

}

int main(void){
    cin>>num;
    cout<<"어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다."<<endl;
    func(num);
}
```