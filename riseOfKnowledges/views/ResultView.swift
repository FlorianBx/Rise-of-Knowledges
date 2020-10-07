//
//  ResultView.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/21/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct ResultView: View {
    
    @State private var showQuizzView: Bool = false
    @Binding var isCorrect: Bool
    
    var questionNumber: Int
    var apiQuizDatas: QuizzViewModel
    
    func redirect(_ questionNumb: Int) -> some View {
        if questionNumb >= 19 {
            return AnyView(ScoreView())
        }
        return AnyView(QuizzView(apiDatas: apiQuizDatas, questionNumber: questionNumber + 1))
    }
    
    var body: some View {
        ZStack {
            VStack {
                Spacer()
                VStack {
                    Text("Question:")
                        .font(.headline)
                        .padding(.bottom)
                    Text(String(apiQuizDatas.quizz[questionNumber].question))
                }
                Spacer()
                
                VStack {
                    Text("Answer:")
                        .font(.headline)
                        .padding(.bottom)
                    Text(apiQuizDatas.quizz[questionNumber].answer)
                        .foregroundColor(isCorrect ? Color.green : Color.red)
                        .frame(minWidth: 100, idealWidth: 300, maxWidth: .infinity)
                }
                Spacer()
                VStack {
                    Text("Anecdote:")
                        .font(.headline)
                        .padding(.bottom)
                    Text(apiQuizDatas.quizz[questionNumber].anecdote)
                }
                Spacer()
                Spacer()
                Button(action: { showQuizzView = true }) {
                    Text("Next")
                        .foregroundColor(.white)
                        .frame(width: 300, height: 80, alignment: .center)
                        .background(Color.green)
                }
                .onAppear() { print(String(questionNumber)) }
                .cornerRadius(10)
                .opacity(0.8)
                .fullScreenCover(isPresented: $showQuizzView, content: {
                    redirect(questionNumber)
                })
                Spacer()
            }
            .padding()
            .background(Color("NightBlue"))
            .navigationBarBackButtonHidden(true)
        }
        .edgesIgnoringSafeArea(.all)
        .foregroundColor(Color.white)
    }
}
