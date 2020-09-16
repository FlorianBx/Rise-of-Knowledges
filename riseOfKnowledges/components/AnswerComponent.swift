//
//  AnswerComponent.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct AnswerComponent: View {
    
    @Binding var answers: Array<String>
    
    private func showAnswers() {
        
    }
    
    var body: some View {
        VStack {
            ForEach(answers, id: \.self) { item in
            ZStack {
                Rectangle()
                    .fill(Color.blue)
                    .frame(width: 300, height: 100, alignment: .center)
                    .cornerRadius(15)
                    .opacity(0.2)
                    .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: 200)
                Text(item)
                    .foregroundColor(.white)
            }
        }
            
        }
    }
}

//struct AnswerComponent_Previews: PreviewProvider {
//    
//    static var previews: some View {
//        AnswerComponent()
//    }
//}
