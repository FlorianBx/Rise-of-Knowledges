//
//  AnswerComponent.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct AnswerComponent: View {
    
    @State private var showResultView: Bool = false
    
    var questionNumber: Int
    var suggestions: Array<String>
    var question: String
    var answer: String
    var anecdote: String
    
    var body: some View {
        VStack {
            ForEach(suggestions, id: \.self) { item in
                ZStack {
                    VStack {
                        Button(action: {
                            self.showResultView = true
                        }) {
                            Text(item)
                                .foregroundColor(.white)
                                .frame(width: 300, height: 80, alignment: .center)
                                .background(Color.pink)
                        }
                        .fullScreenCover(isPresented: $showResultView, content: {
                            ResultView(
                                question: question,
                                isCorrect: item == answer ? true : false,
                                answer: answer,
                                anecdote: anecdote,
                                questionNumber: questionNumber
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
