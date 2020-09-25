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
    
    var question: String
    var answer: String
    var anecdote: String
    var questionNumber: Int
    
    var body: some View {
        ZStack {
            VStack {
                Spacer()
                Text(String(question))
                Spacer()
                
                Text("Answer is: \(answer)")
                    .foregroundColor(isCorrect ? Color.green : Color.red)
                    .frame(minWidth: 100, idealWidth: 300, maxWidth: .infinity)
                Spacer()
                Text("Anecdote: \(anecdote)")
                Spacer()
                Spacer()
                Button(action: { showQuizzView = true }) {
                    Text("Next")
                        .foregroundColor(.white)
                        .frame(width: 300, height: 80, alignment: .center)
                        .background(Color.green)
                }
                .cornerRadius(10)
                .opacity(0.8)
                .fullScreenCover(isPresented: $showQuizzView, content: {
                    QuizzView(questionNumber: questionNumber + 1)
                })
                Spacer()
            }
            .padding()
            .edgesIgnoringSafeArea(.all)
            .foregroundColor(Color.white)
            .background(Color("NightBlue"))
            .navigationBarBackButtonHidden(true)
        }
    }
}
