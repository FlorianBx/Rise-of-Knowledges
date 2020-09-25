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
    
    func redirect(_ questionNumb: Int) -> some View {
        if questionNumb >= 19 {
            return AnyView(ScoreView())
        }
        return AnyView(QuizzView(questionNumber: questionNumber + 1))
    }
    
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
                .onAppear() { print(String(questionNumber)) }
                .cornerRadius(10)
                .opacity(0.8)
                .fullScreenCover(isPresented: $showQuizzView, content: {
                    redirect(questionNumber)
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
