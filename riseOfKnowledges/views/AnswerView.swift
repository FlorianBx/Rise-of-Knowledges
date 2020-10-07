//
//  AnswerView.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct AnswerView: View {
    
    @State private var showResultView: Bool = false
    @State private var isCorrect: Bool = false
    
    var questionNumber: Int
    var apiQuizDatas: QuizzViewModel
    
    
    var body: some View {
        VStack {
            ForEach(apiQuizDatas.quizz[questionNumber].suggestion, id: \.self) { item in
                ZStack {
                    VStack {
                        Button(action: {
                            isCorrect = item == apiQuizDatas.quizz[questionNumber].answer ? true : false
                            self.showResultView = true
                        }) {
                            Text(item)
                                .foregroundColor(.white)
                                .frame(width: 300, height: 80, alignment: .center)
                                .background(Color.pink)
                        }
                        .fullScreenCover(isPresented: $showResultView, content: {
                            ResultView(
                                isCorrect: self.$isCorrect,
                                questionNumber: questionNumber,
                                apiQuizDatas: apiQuizDatas
                            )
                        })
                        .cornerRadius(15)
                        .opacity(0.6)
                        
                    }
                    .frame(width: 300, height: 100)
                    .padding(.bottom, -10)
                }
            }
        }
    }
}
