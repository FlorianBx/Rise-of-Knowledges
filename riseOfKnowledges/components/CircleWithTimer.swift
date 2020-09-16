//
//  CircleWithTimer.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct CircleWithTimer: View {
    
    @Binding var value: Int
    
    var body: some View {
        VStack(alignment: .center, spacing: 10) {
            Circle()
                .fill(Color.pink)
                .frame(width: 100, height: 100)

                
                Text("sec")
        }
        .edgesIgnoringSafeArea(.all)
    }
}

struct CircleWithTimer_Previews: PreviewProvider {
    static var previews: some View {
        CircleWithTimer(value: .constant(45))
    }
}
