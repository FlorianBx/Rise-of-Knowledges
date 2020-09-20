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
    
    var body: some View {
        VStack {
            ForEach(answers, id: \.self) { item in
                ZStack {
                    Button(action: {
                        print(item)
                    }) {
                        Text(item)
                            .foregroundColor(.white)
                            .frame(width: 300, height: 80, alignment: .center)
                            .background(Color.pink)
                    }
                    .cornerRadius(15)
                    .opacity(0.6)
                    }
                    .frame(width: 300, height: 100)
                    .padding(.bottom, -10)
            }
        }
    }
}
