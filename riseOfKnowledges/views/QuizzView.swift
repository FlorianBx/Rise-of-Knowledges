//
//  QuizzView.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct QuizzView: View {
    
    @ObservedObject var quizzDatas = FetchQuizz()
    @State private var showScoreView: Bool = false
    
    var questionNumber: Int = 0
    
    var body: some View {
        VStack {
            if self.quizzDatas.quizz.isEmpty {
                Indicator()
            } else if self.quizzDatas.quizz[questionNumber].question.isEmpty {
                VStack {
                    EmptyView()
                }
                .fullScreenCover(isPresented: $showScoreView, content: {
                    ScoreView()
                })
            } else {
                VStack {
                    Spacer()
                    VStack {
                        Spacer()
                        QuestionComponent(
                            question: self.quizzDatas.quizz[questionNumber].question
                        )
                        Spacer()
                        AnswerComponent(
                            questionNumber: questionNumber,
                            suggestions: self.quizzDatas.quizz[questionNumber].suggestion,
                            question: self.quizzDatas.quizz[questionNumber].question,
                            answer: self.quizzDatas.quizz[questionNumber].answer,
                            anecdote: self.quizzDatas.quizz[questionNumber].anecdote
                        )
                        Spacer()
                    }
                }
            }
        }.onAppear() {
            self.quizzDatas.fetchQuizzDatas()
            print(String(questionNumber))
        }
        .background(Color("NightBlue"))
        .edgesIgnoringSafeArea(.all)
        .navigationBarBackButtonHidden(true)
    }
}
