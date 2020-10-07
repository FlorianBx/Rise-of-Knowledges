//
//  QuestionView.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct QuestionView: View {
    
    var question :String
    
    var body: some View {
        ZStack {
            Spacer()
            VStack {
                Rectangle()
                    .fill(Color.blue)
                    .cornerRadius(15)
                    .opacity(0.2)
                    .padding()
                    .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: 200)
            }
            Text(question)
                .foregroundColor(Color.white)
                .frame(minWidth: 0, maxWidth: 300, minHeight: 200, maxHeight: 400)
                .minimumScaleFactor(0.5)
            Spacer()
        }
        .edgesIgnoringSafeArea(.all)
    }
}
