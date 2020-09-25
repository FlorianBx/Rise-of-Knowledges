//
//  QuestionComponent.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct QuestionComponent: View {
    
    var question :String
    
    var body: some View {
        ZStack {
            VStack {
                Rectangle()
                    .fill(Color.blue)
                    .cornerRadius(15)
                    .opacity(0.2)
                    .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: 200)
//                    .background(Color.red)
            }
            Text(question)
                .tracking(0.5)
                .foregroundColor(Color.white)
                .frame(minWidth: 0, maxWidth: .infinity)
                .lineSpacing(4)
        }
        .padding(.bottom, -40)
    }
}
