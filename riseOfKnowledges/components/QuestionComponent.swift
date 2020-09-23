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
                    .frame(width: 300, height: 200, alignment: .center)
                    .cornerRadius(15)
                    .opacity(0.2)
                    .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: 200)
            }
            Text(question)
                .tracking(0.5)
                .foregroundColor(Color.white)
                .frame(width: 280, height: 200, alignment: .center)
                .lineSpacing(4)
        }
        .padding(.bottom, -40)
    }
}
