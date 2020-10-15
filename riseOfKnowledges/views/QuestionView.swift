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
        VStack {
            Text(question)
                .foregroundColor(Color.white)
                .frame(minWidth: 100, idealWidth: 300, maxWidth: .infinity)
                .minimumScaleFactor(0.5)
        }
        .padding()
    }
}
