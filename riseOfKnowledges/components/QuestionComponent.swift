//
//  QuestionComponent.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct QuestionComponent: View {
    
    @State private var question :String = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?"
    
    var body: some View {
        ZStack {
            VStack {
                Rectangle()
                    .fill(Color.blue)
                    .frame(width: 300, height: 150, alignment: .center)
                    .cornerRadius(15)
                    .opacity(0.2)
                    .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: 200)
            }
            Text(question)
                .tracking(0.5)
                .foregroundColor(Color.white)
                .frame(width: 280, height: 150, alignment: .center)
                .lineSpacing(4)
        }
        .padding(.bottom, -40)
    }
}
//
//struct QuestionComponent_Previews: PreviewProvider {
//    static var previews: some View {
//        QuestionComponent()
//    }
//}
