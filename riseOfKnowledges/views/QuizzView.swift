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
    
    @State private var Questions :String = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?"
    @State private var Answers :Array<String> = ["Coucou1", "Hello World", "OhMy GOSH", "What the fuck you doing here !!!"]
    
    var body: some View {
        VStack {
            if self.quizzDatas.quizz.isEmpty {
                Indicator()
            } else {
                VStack {
                ForEach(self.quizzDatas.quizz) { quiz in
                    VStack {
                    Text(quiz.question)
                    }
                }
            }
//                Spacer()
//                QuestionComponent(question: $Questions)
//                Spacer()
//                AnswerComponent(answers: $Answers)
//                Spacer()
            }
        }.onAppear() {
            self.quizzDatas.fetchQuizzDatas()
        }
        .background(Color("NightBlue"))
        .edgesIgnoringSafeArea(.all)
        .navigationBarBackButtonHidden(true)
    }
}
