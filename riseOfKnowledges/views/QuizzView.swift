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
    
    var apiDatas: QuizzViewModel?
    var userDatas: ScoreViewModel
    var questionNumber: Int = 0
    
    var body: some View {
        guard let apiQuizDatas = apiDatas else {
            return AnyView(HomeView())
        }
        return AnyView(
            VStack {
                Spacer()
                HStack {
                    Text("Question")
                        .fontWeight(.heavy)
                        .foregroundColor(.white)
                        .font(.title)
                    Text(questionNumber + 1 < 10 ? "0\(questionNumber + 1)" : "\(questionNumber + 1)")
                        .fontWeight(.black)
                        .foregroundColor(Color("cyanQuizz"))
                        .font(.largeTitle)
                    Text("/20")
                        .fontWeight(.light)
                        .foregroundColor(.gray)
                        .font(.title)
                }
                .frame(minWidth: 250, idealWidth: 300, maxWidth: .infinity, minHeight: 100, idealHeight: 100, maxHeight: 100, alignment: .center)
                VStack {
                    QuestionView(
                        question: apiQuizDatas.quizz[questionNumber].question
                    )
                    AnswerView(
                        score: userDatas,
                        questionNumber: questionNumber,
                        apiQuizDatas: apiQuizDatas,
                        userDatas: self.userDatas
                    )
                }
                Spacer()
            }
            .background(Color("blueQuizz"))
            .edgesIgnoringSafeArea(.all)
            .navigationBarBackButtonHidden(true)
        )
    }
}
