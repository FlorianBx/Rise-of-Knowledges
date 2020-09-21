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
    @State private var questionNumber = 0
    
    var body: some View {
        VStack {
            if self.quizzDatas.quizz.isEmpty {
                Indicator()
            } else {
                VStack {
                    Spacer()
                    VStack {
                        Spacer()
                        QuestionComponent(question: self.quizzDatas.quizz[questionNumber].question)
                        Spacer()
                        AnswerComponent(answers: self.quizzDatas.quizz[questionNumber].suggestion)
                        Spacer()
                    }
                }
            }
        }.onAppear() {
            self.quizzDatas.fetchQuizzDatas()
        }
        .background(Color("NightBlue"))
        .edgesIgnoringSafeArea(.all)
        .navigationBarBackButtonHidden(true)
    }
}
