//
//  QuizzView.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct QuizzView: View {
    
    @State private var showScoreView: Bool = false
    
    var apiDatas: FetchQuizz?
    var questionNumber: Int = 0
    
    var body: some View {
        guard let apiQuizDatas = apiDatas else {
            return AnyView(Home())
        }
        return AnyView(
            VStack {
                Spacer()
                QuestionComponent(
                    question: apiQuizDatas.quizz[questionNumber].question
                )
                AnswerComponent(
                    questionNumber: questionNumber,
                    apiQuizDatas: apiQuizDatas
                )
                Spacer()
            }
            .background(Color("NightBlue"))
            .edgesIgnoringSafeArea(.all)
            .navigationBarBackButtonHidden(true)
        )
    }
}
