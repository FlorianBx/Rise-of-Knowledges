//
//  QuizzView.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct QuizzView: View {
    
    @State private var Question :String = ""
    @State private var Answers :Array<String> = ["Coucou1", "Hello World", "OhMy GOSH", "What the fuck you doing here !!!"]
    
    var body: some View {
        VStack {
            Spacer()
            QuestionComponent()
            Spacer()
            AnswerComponent(answers: $Answers)
            Spacer()
        }
        .background(Color("NightBlue"))
        .edgesIgnoringSafeArea(.all)
    }
}

struct QuizzView_Previews: PreviewProvider {
    static var previews: some View {
        QuizzView()
    }
}
