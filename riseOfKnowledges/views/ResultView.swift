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
    @Binding var userAnswer: String
    
    var questionNumber: Int
    var apiQuizDatas: QuizzViewModel
    var userDatas: ScoreViewModel
    
    func redirect(_ questionNumb: Int) -> some View {
        if questionNumb >= 19 {
            return AnyView(ScoreView(score: userDatas, userDatas: self.userDatas))
        }
        return AnyView(
            QuizzView(
                apiDatas: apiQuizDatas,
                userDatas: self.userDatas,
                questionNumber: questionNumber + 1
            )
        )
    }
    
    var body: some View {
        ZStack {
            VStack {
                Spacer()
                VStack {
                    Text("Question:")
                        .font(.largeTitle)
                        .bold()
                        .padding(.bottom)
                    Text(String(apiQuizDatas.quizz[questionNumber].question))
                }
                Divider()
                    .background(Color.white)
                    .padding()
                VStack {
                    Text("Answer:")
                        .font(.largeTitle)
                        .bold()
                        .padding(.bottom)
                    Text(apiQuizDatas.quizz[questionNumber].answer)
                        .foregroundColor(isCorrect ? Color.green : Color.red)
                        .frame(minWidth: 100, idealWidth: 300, maxWidth: .infinity)
                }
                Divider()
                    .background(Color.white)
                    .padding()
                VStack {
                    Text("Anecdote:")
                        .font(.largeTitle)
                        .bold()
                        .padding(.bottom)
                    Text(apiQuizDatas.quizz[questionNumber].anecdote)
                }
                Spacer()
                Button(action: { showQuizzView = true }) {
                    Text("Next")
                        .foregroundColor(.white)
                        .frame(width: 300, height: 80, alignment: .center)
                        .background(Color.green)
                }
                .onAppear() {
                    userDatas.userScore[0].datas.append(
                        datasScoreModel(
                            answer: apiQuizDatas.quizz[questionNumber].answer,
                            difficulty: apiQuizDatas.quizz[questionNumber].difficulty,
                            userAnswer: self.userAnswer
                        )
                    )
                }
                .cornerRadius(10)
                .opacity(0.8)
                .fullScreenCover(isPresented: $showQuizzView, content: {
                    redirect(questionNumber)
                })
                Spacer()
            }
            .padding()
            .background(Color("blueQuizz"))
            .navigationBarBackButtonHidden(true)
        }
        .edgesIgnoringSafeArea(.all)
        .foregroundColor(Color.white)
    }
}
