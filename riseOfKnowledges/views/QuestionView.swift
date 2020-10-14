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
            GeometryReader { geometry in
//            VStack {
//                Rectangle()
//                    .fill(Color.blue)
//                    .cornerRadius(15)
//                    .opacity(0.2)
//                    .frame(width: geometry.size.width, height: 200)
//            }
            Text(question)
                .foregroundColor(Color.white)
                .frame(width: geometry.size.width, height: 200, alignment: .center)
                .minimumScaleFactor(0.5)
            }
        }
        .padding(10)
    }
}
